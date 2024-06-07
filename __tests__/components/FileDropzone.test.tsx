/**
 * @jest-environment jsdom
 */
import { fireEvent, render, screen } from '@testing-library/react';
import FileDropzone from '../../components/Dropzones/FileDropzone';

// Mocking the Image component from next/image
jest.mock('next/image', () => ({
  __esModule: true,
  default: ({
    src,
    alt,
    width,
    height,
  }: {
    src: string;
    alt: string;
    width: number;
    height: number;
  }) => {
    return <img src={src} alt={alt} width={width} height={height} />;
  },
}));

describe('FileDropzone', () => {
  const mockOnDrop = jest.fn();

  beforeEach(() => {
    render(<FileDropzone onDrop={mockOnDrop} />);
  });

  it('renders a heading', () => {
    const heading = screen.getByRole('heading', {
      name: 'Upload your files',
    });

    expect(heading).toBeInTheDocument();
  });
});
