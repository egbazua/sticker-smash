import { MaterialIcons } from '@expo/vector-icons'
import { View, Text, Modal, Pressable, StyleSheet } from 'react-native'

interface EmojiPickerProps {
  isVisible: boolean
  onClose: () => void
  children: any
}

export default function EmojiPicker({ isVisible, onClose, children }: EmojiPickerProps) {
  return (
    <Modal animationType='slide' transparent={true} visible={isVisible}>
      <View style={styles.modalContent}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Choose a Sticker</Text>
          <Pressable onPress={onClose}>
            <MaterialIcons name='close' color='#FFFFFF' size={22} />
          </Pressable>
        </View>
        {children}
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modalContent: {
    height: '25%',
    width: '100%',
    backgroundColor: '#25292e',
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
    position: 'absolute',
    bottom: 0,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  titleContainer: {
    height: '16%',
    backgroundColor: '#464C55',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
})
