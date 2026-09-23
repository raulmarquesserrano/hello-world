import { ActivityIndicator, Text, View } from 'react-native';

interface MensagemProps {
  texto?: string;
}

export function Carregando({ texto = 'Carregando...' }: MensagemProps) {
  return (
    <View className="flex-1 items-center justify-center p-6">
      <ActivityIndicator size="large" color="#61DAFB" />
      <Text className="text-slate-500 dark:text-suave text-sm mt-3">
        {texto}
      </Text>
    </View>
  );
}

export function Vazio({ texto = 'Nenhum item encontrado.' }: MensagemProps) {
  return (
    <View className="items-center justify-center p-6 mt-10">
      <Text className="text-slate-500 dark:text-suave text-center text-sm">
        {texto}
      </Text>
    </View>
  );
}

export function Erro({ texto = 'Ocorreu um erro ao carregar os dados.' }: MensagemProps) {
  return (
    <View className="items-center justify-center p-6 mt-10">
      <Text className="text-red-500 dark:text-alerta text-center text-sm">
        {texto}
      </Text>
    </View>
  );
}

export function Separador() {
  return <View className="h-3" />;
}
