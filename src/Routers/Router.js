import { createBrowserRouter } from 'react-router-dom';
import Root from '../Layouts/Root/Root';
import About from '../Pages/About/About';
import Administration from '../Pages/Administration/Administration';
import DefenseProject from '../Pages/DefenseProject/DefenseProject';
import DirectorNote from '../Pages/DirectorNote/DirectorNote';
import Document from '../Pages/Document/Document';
import EngSchool from '../Pages/EngSchool/EngSchool';
import EngVolunteers from '../Pages/EngVolunteers/EngVolunteers';
import Home from '../Pages/Home/Home';
import TarsUniverse from '../Pages/TarsUniverse/TarsUniverse';
import Video from '../Pages/Video/Video';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		children: [
			{
				index: true,
				path: '/',
				element: <Home />
			},
			{
				path: 'home',
				element: <Home />
			},
			{
				path: 'about',
				element: <About />
			},
			{
				path: "director's-note",
				element: <DirectorNote />
			},
			{
				path: 'documents',
				element: <Document />
			},
			{
				path: 'tars-universe',
				element: <TarsUniverse />
			},
			{
				path: 'defense-projects',
				element: <DefenseProject />
			},
			{
				path: 'administration',
				element: <Administration />
			},
			{
				path: 'engineering-school',
				element: <EngSchool />
			},
			{
				path: 'engineering-volunteers',
				element: <EngVolunteers />
			},
			{
				path: 'video',
				element: <Video />
			}
		]
	}
]);

export default router;
