# componentsLibrary

![npm](https://img.shields.io/npm/v/componentsLibrary) ![license](https://img.shields.io/github/license/tu-usuario/componentsLibrary)

Una librería de componentes reutilizables para React Native.

## 📦 Instalación

Puedes instalar esta librería con npm o yarn:

```sh
npm install componentsLibrary
# o
yarn add componentsLibrary
```

## 🚀 Uso

Importa y usa los componentes en tu proyecto:

```tsx
import { RideButton } from 'componentsLibrary';

const App = () => {
  return <RideButton text="Button" onPress={() => console.log('Click on button')} />;
};
```

## 📜 API de Componentes

### `MiComponente`

| Propiedad | Tipo   | Descripción                 |
|-----------|--------|-----------------------------|
| `text`    | string | Texto que se mostrará       |
| `size`    | string | Tamaño de botón             |
| `state`   | string | Estado del botón            |
| `onPress` | action | Acción                      |


## 📝 Licencia

Este proyecto está bajo la licencia MIT. ¡Siéntete libre de contribuir! 😃

