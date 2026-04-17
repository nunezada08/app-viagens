import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Inicio" component={Inicio} />
      <Drawer.Screen name="Informações" component={Informações} />
      <Drawer.Screen name="Contato" component={Contato} />
    </Drawer.Navigator>
  );
}