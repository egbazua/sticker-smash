import { Image, ImageSourcePropType, StyleSheet } from 'react-native'

interface ImageViewerProps {
  placeholderImageSource: ImageSourcePropType
  selectedImage: string
}

export default function ImageViewer({ placeholderImageSource, selectedImage }: Readonly<ImageViewerProps>) {
  const imageSource = selectedImage ? { uri: selectedImage } : placeholderImageSource

  return (
    <Image source={imageSource} style={styles.image} />
  )
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  }
})
