package com.example.mytube.ui

import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.example.mytube.data.YouTubeRepository
import com.example.mytube.network.VideoItem
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.launch

class HomeViewModel(private val repository: YouTubeRepository) : ViewModel() {
    private val _videos = MutableStateFlow<List<VideoItem>>(emptyList())
    val videos: StateFlow<List<VideoItem>> = _videos

    fun loadTrending() {
        viewModelScope.launch {
            runCatching { repository.fetchTrending() }
                .onSuccess { _videos.value = it.items }
        }
    }
}
