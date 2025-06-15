package com.example.mytube

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.lifecycle.ViewModel
import androidx.lifecycle.ViewModelProvider
import com.example.mytube.data.YouTubeRepository
import com.example.mytube.di.NetworkModule
import com.example.mytube.theme.MyTubeTheme
import com.example.mytube.ui.HomeScreen
import com.example.mytube.ui.HomeViewModel

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            val service = NetworkModule.provideService()
            val repository = YouTubeRepository(service, BuildConfig.YOUTUBE_API_KEY)
            val viewModel = object : ViewModelProvider.Factory {
                override fun <T : ViewModel> create(modelClass: Class<T>): T {
                    return HomeViewModel(repository) as T
                }
            }.create(HomeViewModel::class.java)
            MyTubeTheme {
                HomeScreen(viewModel)
            }
        }
    }
}
