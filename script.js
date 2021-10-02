const img = document.querySelector('img');
        const music = document.querySelector('audio')
        const play = document.getElementById('play');
        const title = document.getElementById('title');
        const name = document.getElementById('name');
        const prev = document.getElementById('prev');
        const next = document.getElementById('next');

        const song = [
            {
                name: 'hey',
                title: 'Hey',
                artist: 'Tushar'
            },
            {
                name: 'summer',
                title: 'Summer',
                artist: 'Tushar'
            },
            {
                name: 'ukulele',
                title: 'Ukulele',
                artist: 'Tushar'
            }
        ]

        let isPlaying = false;
        // For Play Functions
        const playMusic = () => {
            isPlaying = true
            music.play();
            play.classList.replace('fa-play', 'fa-pause');
            img.classList.add('anime');
        };

        // FOr Pause Functions
        const pauseMusic = () => {
            isPlaying = false
            music.pause();
            play.classList.replace('fa-pause', 'fa-play');
            img.classList.remove('anime');
        }

        play.addEventListener('click', () => {
            // if (isPlaying = false) {
            //     pauseMusic();
            // } else {
            //     playMusic();
            // }

            isPlaying ? pauseMusic() : playMusic();
        });

        const LoadSongs = (song) => {
            title.textContent = song.title;
            name.textContent = song.artist;
            music.src = 'music/' + song.name + '.mp3'
            img.src = 'images/' + song.name + '.jpg'
        };
        songIndex = 0
        const nextSong = () => {
            songIndex = (songIndex + 1) % song.length;
            LoadSongs(song[songIndex]);
            playMusic();
        }
        const prevSong = () => {
            songIndex = (songIndex - 1 + song.length)
            LoadSongs(song[songIndex]);
            playMusic()
        }

        next.addEventListener('click', nextSong);
        prev.addEventListener('click', prevSong);