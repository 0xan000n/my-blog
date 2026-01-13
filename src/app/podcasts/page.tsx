'use client'

import { useState } from 'react'
import Image from 'next/image'
import { AnimatedText } from '@/components/AnimatedText'
import { Expandable } from '@/components/Expandable'
import { AudioPlayer } from '@/components/AudioPlayer'
import { sovereignSchoolbus, tribeOfOne, TribeEpisode, SchoolbusEpisode } from '@/content/podcasts'

type PlayableEpisode = {
  title: string
  href: string
}

export default function PodcastsPage() {
  const [currentEpisode, setCurrentEpisode] = useState<PlayableEpisode | null>(null)

  return (
    <div className={`space-y-8 ${currentEpisode ? 'pb-28' : ''}`}>
      <div>
        <h1 className="text-2xl font-semibold tracking-tight mb-2">
          <AnimatedText text="Podcasts" />
        </h1>
        <p className="text-zinc-400">
          Conversations about belonging, tribalism, and the human experience.
        </p>
      </div>

      <div className="space-y-4">
        <div className="p-6 rounded-lg border border-zinc-800 space-y-4">
          <div className="flex items-start gap-4">
            <Image
              src={sovereignSchoolbus.image}
              alt={sovereignSchoolbus.title}
              width={64}
              height={64}
              className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
            />
            <div className="min-w-0 flex-1">
              <h2 className="text-lg font-medium">{sovereignSchoolbus.title}</h2>
              <p className="text-sm text-zinc-400 mt-1">
                {sovereignSchoolbus.description}
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-medium text-zinc-500 uppercase tracking-wide">
            Episodes
          </h3>
          <div className="divide-y divide-zinc-800">
            {sovereignSchoolbus.episodes.map((episode) => (
              <div key={episode.number} className="py-4 space-y-2">
                <div className="flex items-start gap-4">
                  <span className="text-sm text-zinc-600 w-8 flex-shrink-0 pt-0.5">
                    {episode.number.toString().padStart(2, '0')}
                  </span>
                  <div className="flex-1 min-w-0 space-y-2">
                    <div className="flex items-start justify-between gap-4">
                      {episode.isAudio ? (
                        <button
                          onClick={() => setCurrentEpisode({ title: episode.title, href: episode.href })}
                          className="font-medium hover:text-zinc-300 transition-colors text-left"
                        >
                          {currentEpisode?.href === episode.href && (
                            <span className="text-zinc-500 mr-2">▶</span>
                          )}
                          {episode.title}
                        </button>
                      ) : (
                        <a
                          href={episode.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium hover:text-zinc-300 transition-colors text-left"
                        >
                          {episode.title}
                        </a>
                      )}
                      <time dateTime={episode.date} className="text-sm text-zinc-600 flex-shrink-0 hidden sm:block">
                        {new Date(episode.date).toLocaleDateString('en-US', {
                          month: 'short',
                          year: 'numeric',
                        })}
                      </time>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="p-6 rounded-lg border border-zinc-800 space-y-4">
          <div className="flex items-start gap-4">
            <Image
              src={tribeOfOne.image}
              alt={tribeOfOne.title}
              width={64}
              height={64}
              className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
            />
            <div className="min-w-0 flex-1">
              <h2 className="text-lg font-medium">{tribeOfOne.title}</h2>
              <p className="text-sm text-zinc-400 mt-1">
                {tribeOfOne.description}
              </p>
              <a
                href={tribeOfOne.podbayUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm text-zinc-400 hover:text-zinc-100 mt-2 transition-colors"
              >
                View on Podbay &rarr;
              </a>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-medium text-zinc-500 uppercase tracking-wide">
            Episodes
          </h3>
          <div className="divide-y divide-zinc-800">
            {tribeOfOne.episodes.map((episode) => (
              <div key={episode.number} className="py-4 space-y-2">
                <div className="flex items-start gap-4">
                  <span className="text-sm text-zinc-600 w-8 flex-shrink-0 pt-0.5">
                    {episode.number.toString().padStart(2, '0')}
                  </span>
                  <div className="flex-1 min-w-0 space-y-2">
                    <div className="flex items-start justify-between gap-4">
                      <button
                        onClick={() => setCurrentEpisode({ title: episode.title, href: episode.href })}
                        className="font-medium hover:text-zinc-300 transition-colors text-left"
                      >
                        {currentEpisode?.href === episode.href && (
                          <span className="text-zinc-500 mr-2">▶</span>
                        )}
                        {episode.title}
                      </button>
                      <div className="flex items-center gap-3 text-sm text-zinc-600 flex-shrink-0">
                        <span className="hidden sm:block">{episode.duration}</span>
                        <time dateTime={episode.date} className="hidden sm:block">
                          {new Date(episode.date).toLocaleDateString('en-US', {
                            month: 'short',
                            year: 'numeric',
                          })}
                        </time>
                      </div>
                    </div>
                    <Expandable title="Show notes">
                      <div className="whitespace-pre-line">{episode.description}</div>
                    </Expandable>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {currentEpisode && (
        <AudioPlayer
          src={currentEpisode.href}
          title={currentEpisode.title}
          onClose={() => setCurrentEpisode(null)}
        />
      )}
    </div>
  )
}
