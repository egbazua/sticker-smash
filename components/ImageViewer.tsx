import { Image, ImageSourcePropType, StyleSheet } from 'react-native'

interface ImageViewerProps {
  placeholderImageSource: ImageSourcePropType
}

export default function ImageViewer({ placeholderImageSource }: Readonly<ImageViewerProps>) {
  return (
    <Image source={placeholderImageSource} style={styles.image} />
  )
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  }
})
