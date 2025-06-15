package com.example.mytube.network

import retrofit2.http.GET
import retrofit2.http.Query

interface YouTubeApiService {
    @GET("videos")
    suspend fun getTrending(
        @Query("part") part: String = "snippet,statistics",
        @Query("chart") chart: String = "mostPopular",
        @Query("maxResults") maxResults: Int = 10,
        @Query("regionCode") regionCode: String = "US",
        @Query("key") apiKey: String
    ): TrendingResponse
}

data class TrendingResponse(
    val items: List<VideoItem>
)

data class VideoItem(
    val id: String,
    val snippet: Snippet,
    val statistics: Statistics
)

data class Snippet(
    val title: String,
    val channelTitle: String,
    val thumbnails: Thumbnails
)

data class Thumbnails(
    val medium: Thumbnail
)

data class Thumbnail(
    val url: String
)

data class Statistics(
    val viewCount: String
)
