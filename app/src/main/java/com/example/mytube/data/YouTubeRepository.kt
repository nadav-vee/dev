package com.example.mytube.data

import com.example.mytube.network.YouTubeApiService

class YouTubeRepository(private val service: YouTubeApiService, private val apiKey: String) {
    suspend fun fetchTrending() = service.getTrending(apiKey = apiKey)
}
