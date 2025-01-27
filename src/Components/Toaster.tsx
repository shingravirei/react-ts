import { FaCheck, FaExclamation, FaInfo, FaXmark } from 'react-icons/fa6';
import { Toaster as Sonner } from 'sonner';
import {
	toastBase,
	toastDanger,
	toastDescription,
	toastInfo,
	toastSuccess,
	toastWarning,
} from '~/styles/toast.css';

export const Toaster = () => (
	<Sonner
		duration={5000}
		icons={{
			success: <FaCheck />,
			warning: <FaExclamation />,
			error: <FaXmark />,
			info: <FaInfo />,
		}}
		toastOptions={{
			unstyled: true,
			className: toastBase,
			descriptionClassName: toastDescription,
			classNames: {
				info: toastInfo,
				success: toastSuccess,
				warning: toastWarning,
				error: toastDanger,
			},
		}}
	/>
);
