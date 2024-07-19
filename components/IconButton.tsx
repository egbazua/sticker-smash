import { MaterialIcons } from '@expo/vector-icons'
import { StyleSheet, Pressable, Text } from 'react-native'

interface IconButtonProps {
  icon: any
  label: string
  onPress: () => void
}

export default function IconButton({ icon, label, onPress }: IconButtonProps) {
  return (
    <Pressable style={styles.iconButton} onPress={onPress}>
      <MaterialIcons name={icon} size={24} color="#FFFFFF" />
      <Text style={styles.iconButtonLabel}>{label}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  iconButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconButtonLabel: {
    color: '#FFFFFF',
    marginTop: 12,
  }
})
