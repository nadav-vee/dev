package com.example.mytube.di

import com.example.mytube.network.YouTubeApiService
import retrofit2.Retrofit
import retrofit2.converter.gson.GsonConverterFactory

object NetworkModule {
    private const val BASE_URL = "https://www.googleapis.com/youtube/v3/"

    fun provideService(): YouTubeApiService {
        val retrofit = Retrofit.Builder()
            .baseUrl(BASE_URL)
            .addConverterFactory(GsonConverterFactory.create())
            .build()
        return retrofit.create(YouTubeApiService::class.java)
    }
}
