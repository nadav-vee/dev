package com.example.mytube.ui

import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import coil.compose.AsyncImage
import com.example.mytube.network.VideoItem

@Composable
fun HomeScreen(viewModel: HomeViewModel) {
    val videos by viewModel.videos.collectAsState()
    LaunchedEffect(Unit) { viewModel.loadTrending() }
    LazyColumn {
        items(videos) { video ->
            VideoRow(video)
        }
    }
}

@Composable
fun VideoRow(video: VideoItem) {
    Row(modifier = Modifier.fillMaxWidth().padding(8.dp)) {
        AsyncImage(
            model = video.snippet.thumbnails.medium.url,
            contentDescription = null,
            modifier = Modifier.size(120.dp, 90.dp),
            contentScale = ContentScale.Crop
        )
        Column(modifier = Modifier.padding(start = 8.dp)) {
            Text(text = video.snippet.title, style = MaterialTheme.typography.titleMedium)
            Text(text = video.snippet.channelTitle, style = MaterialTheme.typography.bodyMedium)
        }
    }
}

@Preview
@Composable
fun VideoRowPreview() {
    VideoRow(
        VideoItem(
            id = "1",
            snippet = com.example.mytube.network.Snippet(
                title = "Sample Video",
                channelTitle = "Channel",
                thumbnails = com.example.mytube.network.Thumbnails(
                    medium = com.example.mytube.network.Thumbnail(url = "")
                )
            ),
            statistics = com.example.mytube.network.Statistics("0")
        )
    )
}
