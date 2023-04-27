import { createStyles, Card, Text, Group } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  text: {
    color: theme.colorScheme === 'dark' ? theme.colors.gray[4] : theme.colors.dark[8],
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },
}));

export default function JobCard({ data, color }) {
    const { classes } = useStyles();
    return <Card sx={{ backgroundColor: `${color}` }} component="a" href={`${data.link}`} target='blank' radius="md">
        <Text className={classes.text} weight={500} size="lg" mb="md">{data.title}</Text>
        <Group position="apart">
            <Text className={classes.text} size="sm" color="dimmed" lineClamp={10}>
                {data.description}
            </Text>
        </Group>
    </Card>
}

JobCard.defaultProps = {
    data: {
        'title': "",
        'description': "",
        'contact': "",
        'time-committment': "",
        'minimum-commitment': "",
        'start-date': "",
        'number-of-people-to-fill-this-role': "",
        'applicant-characteristics': "",
        'link': ""
    },
    color: "dark 6",
};
