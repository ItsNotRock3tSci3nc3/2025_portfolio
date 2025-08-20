"use client"
import { useState } from "react"
import Image from "next/image"
import data from "./gallery.json"

type GalleryImage = {
  src: string
  title: string
  description: string
}

export default function GalleryPage() {
  const images: GalleryImage[] = data
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const selected = selectedIndex !== null ? images[selectedIndex] : null

  const prevImage = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + images.length) % images.length)
    }
  }

  const nextImage = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % images.length)
    }
  }

  return (
    <section className="max-w-6xl mx-auto p-8">
      <h1 className="mb-8 text-3xl font-bold tracking-tight">Gallery</h1>

      {/* Image grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((img, idx) => (
          <div
            key={idx}
            className="cursor-pointer rounded-lg overflow-hidden shadow hover:shadow-lg transition"
            onClick={() => setSelectedIndex(idx)}
          >
            <Image
              src={img.src}
              alt={img.title}
              width={500}
              height={300}
              className="object-cover w-full h-60"
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setSelectedIndex(null)}
        >
          <div
            className="bg-white rounded-lg p-6 max-w-3xl w-full max-h-[90vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-3 right-3 text-gray-700 hover:text-black"
            >
              ✕
            </button>

            <div className="flex justify-center">
              <Image
                src={selected.src}
                alt={selected.title}
                width={1200}
                height={800}
                className="rounded-lg mb-4 max-h-[80vh] w-auto object-contain"
              />
            </div>

            <h2 className="text-xl font-semibold text-gray-900">{selected.title}</h2>
            <p className="text-gray-600">{selected.description}</p>

            <div className="flex justify-between mt-4">
              <button
                onClick={prevImage}
                className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
              >
                ← Previous
              </button>
              <button
                onClick={nextImage}
                className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
              >
                Next →
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  )
}
