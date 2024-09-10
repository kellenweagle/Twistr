import { createBrowserRouter } from 'react-router-dom';
import LoginFormPage from '../components/LoginFormPage';
import SignupFormPage from '../components/SignupFormPage';
import Layout from './Layout';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ultrices ligula nulla, ac placerat ex tincidunt vel. Donec quis commodo lectus. Aliquam sollicitudin vitae turpis quis aliquet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum pharetra vulputate efficitur. Aenean porttitor metus in dolor facilisis, quis luctus est egestas. Mauris in elit molestie arcu ultricies ullamcorper tempor ac orci.

        Nullam ut rhoncus turpis, eu aliquam est. Vestibulum a consectetur dui. Aliquam tortor felis, pharetra vel lorem vel, faucibus elementum diam. Donec diam odio, ultrices placerat quam vel, aliquet vestibulum leo. Nullam sem tortor, interdum sit amet sagittis imperdiet, molestie eget sem. Aliquam faucibus ultrices congue. Sed convallis elit quis nisl ornare, ac sollicitudin nisl aliquam. Pellentesque laoreet orci eget nibh scelerisque bibendum. Nam rutrum interdum nisl id fermentum. Ut mattis eros risus, nec elementum risus egestas id. Mauris vitae lobortis ipsum, nec venenatis nibh. Vivamus eget mi et ex aliquam tristique non vitae ex. Nullam rhoncus, diam in lacinia euismod, nisi justo feugiat odio, eget volutpat dolor lectus ut velit.

        Etiam sit amet orci tristique, egestas justo vitae, condimentum neque. Vestibulum et faucibus ligula. Proin et convallis nisi. Ut non sollicitudin diam, at rhoncus est. Sed quis elit efficitur, eleifend nisl in, faucibus ex. Sed vestibulum leo sed tortor hendrerit fermentum. Aenean non felis id ipsum placerat efficitur at at magna. Suspendisse ornare massa eget tellus molestie, ac varius sem pulvinar. Pellentesque vitae risus ut nisi porttitor semper. Donec ultrices dolor ut facilisis semper. Praesent lobortis laoreet eros vitae fringilla.

        Nam vulputate, nibh at tempor consectetur, felis lectus auctor urna, eget sollicitudin nunc felis vel orci. Sed venenatis arcu justo, vitae euismod mauris molestie eu. Pellentesque nulla purus, convallis convallis egestas sed, egestas et lorem. Curabitur ac mollis augue, at laoreet enim. Aliquam ornare ligula dolor, non commodo purus commodo id. Praesent quis augue laoreet, malesuada lacus ut, posuere lorem. Proin fermentum nunc vitae justo rutrum, a mollis nulla varius. Nulla eu sodales magna. Quisque aliquam justo felis, vitae posuere magna facilisis ultricies.

        Ut ultricies ante nec nibh venenatis fermentum. Aenean pretium pharetra lacinia. Curabitur vulputate tristique congue. Vivamus imperdiet, sapien a viverra molestie, erat sem posuere orci, eu blandit lectus ante scelerisque diam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam volutpat lacus vulputate enim molestie sagittis. Fusce congue magna non odio maximus, id mollis lacus pharetra. Sed lobortis enim sed porta gravida. In sit amet dolor facilisis sapien convallis laoreet. Donec id ullamcorper nisl, et sollicitudin purus. Maecenas vitae interdum tellus. Nullam facilisis vel tortor a hendrerit. Nam ornare luctus cursus. Proin non urna porta, rhoncus tellus ut, venenatis turpis. Maecenas imperdiet magna non lectus tristique malesuada. Suspendisse egestas dolor lorem, vitae congue risus euismod vel.Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ultrices ligula nulla, ac placerat ex tincidunt vel. Donec quis commodo lectus. Aliquam sollicitudin vitae turpis quis aliquet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum pharetra vulputate efficitur. Aenean porttitor metus in dolor facilisis, quis luctus est egestas. Mauris in elit molestie arcu ultricies ullamcorper tempor ac orci.

Nullam ut rhoncus turpis, eu aliquam est. Vestibulum a consectetur dui. Aliquam tortor felis, pharetra vel lorem vel, faucibus elementum diam. Donec diam odio, ultrices placerat quam vel, aliquet vestibulum leo. Nullam sem tortor, interdum sit amet sagittis imperdiet, molestie eget sem. Aliquam faucibus ultrices congue. Sed convallis elit quis nisl ornare, ac sollicitudin nisl aliquam. Pellentesque laoreet orci eget nibh scelerisque bibendum. Nam rutrum interdum nisl id fermentum. Ut mattis eros risus, nec elementum risus egestas id. Mauris vitae lobortis ipsum, nec venenatis nibh. Vivamus eget mi et ex aliquam tristique non vitae ex. Nullam rhoncus, diam in lacinia euismod, nisi justo feugiat odio, eget volutpat dolor lectus ut velit.

Etiam sit amet orci tristique, egestas justo vitae, condimentum neque. Vestibulum et faucibus ligula. Proin et convallis nisi. Ut non sollicitudin diam, at rhoncus est. Sed quis elit efficitur, eleifend nisl in, faucibus ex. Sed vestibulum leo sed tortor hendrerit fermentum. Aenean non felis id ipsum placerat efficitur at at magna. Suspendisse ornare massa eget tellus molestie, ac varius sem pulvinar. Pellentesque vitae risus ut nisi porttitor semper. Donec ultrices dolor ut facilisis semper. Praesent lobortis laoreet eros vitae fringilla.

Nam vulputate, nibh at tempor consectetur, felis lectus auctor urna, eget sollicitudin nunc felis vel orci. Sed venenatis arcu justo, vitae euismod mauris molestie eu. Pellentesque nulla purus, convallis convallis egestas sed, egestas et lorem. Curabitur ac mollis augue, at laoreet enim. Aliquam ornare ligula dolor, non commodo purus commodo id. Praesent quis augue laoreet, malesuada lacus ut, posuere lorem. Proin fermentum nunc vitae justo rutrum, a mollis nulla varius. Nulla eu sodales magna. Quisque aliquam justo felis, vitae posuere magna facilisis ultricies.

Ut ultricies ante nec nibh venenatis fermentum. Aenean pretium pharetra lacinia. Curabitur vulputate tristique congue. Vivamus imperdiet, sapien a viverra molestie, erat sem posuere orci, eu blandit lectus ante scelerisque diam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam volutpat lacus vulputate enim molestie sagittis. Fusce congue magna non odio maximus, id mollis lacus pharetra. Sed lobortis enim sed porta gravida. In sit amet dolor facilisis sapien convallis laoreet. Donec id ullamcorper nisl, et sollicitudin purus. Maecenas vitae interdum tellus. Nullam facilisis vel tortor a hendrerit. Nam ornare luctus cursus. Proin non urna porta, rhoncus tellus ut, venenatis turpis. Maecenas imperdiet magna non lectus tristique malesuada. Suspendisse egestas dolor lorem, vitae congue risus euismod vel.</h1>,
      },
      {
        path: "login",
        element: <LoginFormPage />,
      },
      {
        path: "signup",
        element: <SignupFormPage />,
      },
    ],
  },
]);
