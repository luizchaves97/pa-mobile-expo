import React, { useState } from 'react';
import {
  AddClotherContainer,
  Title,
  CreateButton,
  CreateButtonText,
} from './style';
import { ScrollView } from 'react-native-gesture-handler';
import UselessTextInput from '../../components/TextInput';
import UselessImagePicker from '../../components/ImagePicker';

const DEFAULT_STATE = {
  name: '',
  price: '',
  discount_price: '',
  size: '',
  color: '',
  description: '',
  images: [],
};

const AddClotherScreen = () => {
  const [formValue, setFormValue] = useState(DEFAULT_STATE);

  return (
    <AddClotherContainer>
      <ScrollView>
        <Title>Adicionar produto</Title>
        <UselessTextInput
          value={formValue.name}
          onChangeText={(text) => setFormValue({ ...formValue, name: text })}
          label="Nome do produto"
          placeholder="Ex.: Vestido Snake Azul"
        />
        <UselessTextInput
          value={formValue.price}
          onChangeText={(text) => setFormValue({ ...formValue, price: text })}
          label="Preço"
          placeholder="Ex.: R$50"
          keyboardType="numeric"
        />
        <UselessTextInput
          value={formValue.discount_price}
          onChangeText={(text) =>
            setFormValue({ ...formValue, discount_price: text })
          }
          label="Preço com desconto"
          placeholder="Ex.: R$30"
          keyboardType="numeric"
        />
        <UselessTextInput
          value={formValue.size}
          onChangeText={(text) => setFormValue({ ...formValue, size: text })}
          label="Tamanho"
          placeholder="Ex.: P ou M ou G"
        />
        <UselessTextInput
          value={formValue.color}
          onChangeText={(text) => setFormValue({ ...formValue, color: text })}
          label="Cor"
          placeholder="Ex.: Preto"
        />
        <UselessTextInput
          value={formValue.description}
          onChangeText={(text) =>
            setFormValue({ ...formValue, description: text })
          }
          label="Descrição"
          placeholder="Ex.: Vestido muito bem cuidado"
          multiline
          numberOfLines={4}
        />
        <UselessImagePicker />
        <CreateButton onPress={() => console.tron.log(formValue)}>
          <CreateButtonText>Criar produto</CreateButtonText>
        </CreateButton>
      </ScrollView>
    </AddClotherContainer>
  );
};

export default AddClotherScreen;
