'use client';
import FileDropzone from '../components/Dropzones/FileDropzone';
import React from 'react';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <FileDropzone onDrop={() => console.log('File dropped!')} />
      <button className="btn btn-primary">Button</button>
    </main>
  );
}
