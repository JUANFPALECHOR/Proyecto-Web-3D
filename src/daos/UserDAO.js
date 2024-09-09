import { db } from '../../firebase.config';
import { doc, setDoc, getDoc } from 'firebase/firestore';




//se utiliza para gestionar la creación y verificación de usuarios en la base de datos Firestore de Firebase.
const checkAndCreateUser = async (user) => {
  try {
    const userDocRef = doc(db, 'users', user.email); // Usa el email como ID del documento
    const userDoc = await getDoc(userDocRef); // Verifica si el usuario ya existe en Firestore

    if (userDoc.exists()) {
      // Si el documento existe, el usuario ya está creado
      console.log('User already exists:', user.email);
      return true; // Retorna true para indicar que el usuario ya existe
    } else {
      // Si el documento no existe, crea uno nuevo
      await setDoc(userDocRef, user);
      console.log('User created:', user);
      return false; // Retorna false para indicar que se creó el usuario
    }
  } catch (error) {
    console.error('Error checking or creating user:', error);
    throw error; // Lanza el error para manejarlo en el componente
  }
};

export default { checkAndCreateUser };