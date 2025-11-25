import React, { useState } from "react";
import audio from '../../assets/audio/Violin-Cover-Ed-Sheeran.mp3'
import Button from "../Button";
import './audio.sass'

interface AudioProps {
    audioRef: React.RefObject<HTMLAudioElement | null>;
}

const Audio = ({ audioRef }: AudioProps) => {
    const [isPlaying, setIsPlaying] = useState(true);

    return (
        <section className="section audio">
            <div className="section__container audio__container">
                <audio ref={audioRef || undefined}>
                    <source src={audio} type="audio/mp3" />
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
