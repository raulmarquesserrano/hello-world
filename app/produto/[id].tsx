import { Image, ScrollView, Text, View } from 'react-native';
import { Stack, useLocalSearchParams } from 'expo-router';
import { PRODUTOS_TESTE } from '@/utils/gerarProdutos';

export default function DetalheProduto() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const produto = PRODUTOS_TESTE.find((p) => p.id === Number(id));

  if (!produto) {
    return (
      <View className="flex-1 bg-white dark:bg-fundo items-center justify-center p-4">
        <Text className="text-slate-900 dark:text-white text-center">
          Produto não encontrado.
        </Text>
      </View>
    );
  }

  return (
    <ScrollView className="flex-1 bg-white dark:bg-fundo p-4">
      <Stack.Screen options={{ title: produto.title }} />
      <Image
        source={{ uri: produto.thumbnail }}
        className="w-full h-64 rounded-xl bg-slate-200 dark:bg-superficie mb-4"
        resizeMode="contain"
      />
      <Text className="text-slate-900 dark:text-white text-2xl font-bold">
        {produto.title}
      </Text>
      <Text className="text-slate-500 dark:text-suave text-sm mt-1">
        Marca: {produto.brand ?? 'Sem marca'} | Categoria: {produto.category}
      </Text>
      <Text className="text-sky-700 dark:text-destaque text-2xl font-bold mt-3">
        R$ {produto.price.toFixed(2)}
      </Text>
      <Text className="text-slate-700 dark:text-slate-300 text-base mt-4">
        {produto.description}
      </Text>
    </ScrollView>
  );
}
