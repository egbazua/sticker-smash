import { View, Image } from 'react-native'

interface EmojiStickerProps {
  stickerSource: any
  imageSize: number
}

export default function EmojiSticker({ stickerSource, imageSize }: EmojiStickerProps) {
  return (
    <View style={{ top: -350 }}>
      <Image source={stickerSource} resizeMode='contain' style={{ width: imageSize, height: imageSize }} />
    </View>
  )
}
