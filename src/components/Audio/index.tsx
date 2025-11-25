import React, { useState } from "react";
import audio from '../../assets/audio/perfect-violin.mp3'
import audio2 from '../../assets/audio/thousand-years-violin.mp3'
import audio3 from '../../assets/audio/coldplay-viva-la-vida-violin-optimized.mp3'
import Button from "../Button";
import './audio.sass'

interface AudioProps {
    audioRef: React.RefObject<HTMLAudioElement | null>;
    song?: number | string;
}

const audios = [
    { value: 1, audio: audio },
    { value: 2, audio: audio2 },
    { value: 3, audio: audio3 }
]

const Audio: React.FC<AudioProps> = ({ audioRef, song = 1 }) => {
    const [isPlaying, setIsPlaying] = useState(true);

    return (
        <section className="section audio">
            <div className="section__container audio__container">
                <audio ref={audioRef || undefined}>
                    <source src={audios.find((audio) => Number(song) === audio.value)?.audio} type="audio/mp3" />
                </audio>
                <Button
                    onClick={() => {
                        if (audioRef.current) {
                            if (audioRef.current.paused) {
                                audioRef.current.play().catch(error => {
                                    console.error("Error playing audio:", error);
                                });
                                setIsPlaying(true);
                            } else {
                                audioRef.current.pause();
                                setIsPlaying(false);
                            }
                        }
                    }}
                    className="audio-mute-button"
                    label=""
                    color="default"
                    icon={isPlaying ? "hugeicons:volume-mute-02" : "hugeicons:volume-mute-01"}
                    type="outlined"
                />
            </div>
        </section>
    );
};

export default Audio;
