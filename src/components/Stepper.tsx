import { styled } from '@mui/material/styles';
import { Stepper, Stack, Step, StepLabel } from '@mui/material';
import StepConnector, {
	stepConnectorClasses,
} from '@mui/material/StepConnector';
import { StepIconProps } from '@mui/material/StepIcon';

const QontoConnector = styled(StepConnector)(({ theme }) => ({
	[`&.${stepConnectorClasses.alternativeLabel}`]: {
		top: 10,
		left: 'calc(-50% + 16px)',
		right: 'calc(50% + 16px)',
	},
	[`&.${stepConnectorClasses.active}`]: {
		[`& .${stepConnectorClasses.line}`]: {
			borderColor: theme.palette.info.main,
		},
	},
	[`&.${stepConnectorClasses.completed}`]: {
		[`& .${stepConnectorClasses.line}`]: {
			borderColor: theme.palette.info.main,
		},
	},
	[`& .${stepConnectorClasses.line}`]: {
		borderColor: theme.palette.error.main,
		borderTopWidth: 3,
		borderRadius: 1,
	},
}));

const QontoStepIconRoot = styled('div')<{ ownerState: { active?: boolean } }>(
	({ theme, ownerState }) => ({
		color: theme.palette.error.light,
		display: 'flex',
		height: 22,
		alignItems: 'center',
		...(ownerState.active && {
			color: theme.palette.secondary.main,
		}),
		'& .QontoStepIcon-completedIcon': {
			color: theme.palette.secondary.main,
			zIndex: 1,
			fontSize: 18,
		},
		'& .QontoStepIcon-circle': {
			width: 8,
			height: 8,
			borderRadius: '50%',
			backgroundColor: 'currentColor',
		},
	})
);

function QontoStepIcon(props: StepIconProps) {
	const { active, className } = props;

	return (
		<QontoStepIconRoot ownerState={{ active }} className={className}>
			<div className="QontoStepIcon-circle" />
		</QontoStepIconRoot>
	);
}

export default function CustomizedSteppers() {
	return (
		<Stack sx={{ width: '100%' }} spacing={4}>
			<Stepper alternativeLabel activeStep={1} connector={<QontoConnector />}>
				<Step>
					<StepLabel StepIconComponent={QontoStepIcon}>
						Startup Details
					</StepLabel>
				</Step>
				<Step>
					<StepLabel StepIconComponent={QontoStepIcon}>
						Additional Details
					</StepLabel>
				</Step>
			</Stepper>
		</Stack>
	);
}
