/**
 * Represents a file dropzone component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {Function} props.onDrop - The callback function to handle dropped files.
 * @returns {JSX.Element} The rendered component.
 */

'use client';

import React, { useCallback, useState } from 'react';
import { useDropzone, FileRejection } from 'react-dropzone';
import styles from './FileDropzone.module.css';
import Image from 'next/image';
import Card from '../Cards/Card';
import { fileUploadConfig } from '../../config/fileUploadConfig';

function FileDropzone(this: any, { onDrop }: { onDrop: any }) {
  const [fileRejections, setFileRejections] = useState<FileRejection[]>([]);

  const handleDrop = useCallback(
    (acceptedFiles: File[], rejectedFiles: FileRejection[]) => {
      onDrop(acceptedFiles);
      setFileRejections(rejectedFiles);
    },
    [onDrop],
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: handleDrop,
    accept: fileUploadConfig.accept,
  });

  const rootProps = getRootProps();
  const inputProps = getInputProps();

  return (
    <Card>
      <div className={styles.header}>
        <h2 className={styles.title}>Upload your files</h2>
        <p className={styles.subtitle}>File should be mp4 or mov</p>
      </div>
      <div
        data-testid="file-dropzone"
        {...rootProps}
        className={`${styles.dropzone} ${isDragActive ? styles.dropzoneActive : ''}`}
      >
        <input {...inputProps} />
        <div>
          <Image
            src="/icons/cloud-upload.svg"
            alt="Folder Icon"
            width={48}
            height={48}
            className={styles.icon}
          />
          {isDragActive ? (
            <p className="text-blue-500">Drop the files here ...</p>
          ) : (
            <p className="text-gray-500">
              Drag & Drop or{' '}
              <span className="text-blue-500 underline font-sans">browse</span>{' '}
              your files here
            </p>
          )}
        </div>
      </div>
      {fileRejections.length > 0 && (
        <div className="mt-4 text-red-500">
          <p>Some files were rejected:</p>
          <ul>
            {fileRejections.map(({ file, errors }) => (
              <li key={file.name}>
                {file.name} - {errors.map((e) => e.message).join(', ')}
              </li>
            ))}
          </ul>
        </div>
      )}
    </Card>
  );
}

export default FileDropzone;
