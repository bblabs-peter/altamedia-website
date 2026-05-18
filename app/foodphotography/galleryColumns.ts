export interface Photo { src: string; alt: string; forcedRatio?: string }

export interface GalleryLayout {
  columnCount?: number;
  columnLayout?: number[][];
  photoOverrides?: Record<number, Partial<Pick<Photo, "forcedRatio">>>;
}

const DEFAULT_COLUMN_COUNT = 3;

function getColumnCount(layout: GalleryLayout): number {
  const configuredColumnCount = layout.columnLayout?.length || layout.columnCount || DEFAULT_COLUMN_COUNT;

  return Math.max(1, Math.floor(configuredColumnCount));
}

function applyPhotoOverrides(
  photo: Photo,
  index: number,
  overrides?: GalleryLayout["photoOverrides"],
): Photo {
  const override = overrides?.[index];

  return override ? { ...photo, ...override } : photo;
}

export function buildColumns(photos: Photo[], layout: GalleryLayout = {}): Photo[][] {
  const columnCount = getColumnCount(layout);
  const columns: Photo[][] = Array.from({ length: columnCount }, () => []);
  const placedPhotoIndexes = new Set<number>();

  layout.columnLayout?.forEach((photoIndexes, columnIndex) => {
    photoIndexes.forEach((photoIndex) => {
      const photo = photos[photoIndex];

      if (!photo || placedPhotoIndexes.has(photoIndex)) {
        return;
      }

      columns[columnIndex].push(applyPhotoOverrides(photo, photoIndex, layout.photoOverrides));
      placedPhotoIndexes.add(photoIndex);
    });
  });

  photos.forEach((photo, index) => {
    if (placedPhotoIndexes.has(index)) {
      return;
    }

    columns[index % columnCount].push(applyPhotoOverrides(photo, index, layout.photoOverrides));
  });

  return columns;
}
