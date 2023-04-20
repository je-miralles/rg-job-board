import { Card, Text, Group } from '@mantine/core';

export default function JobCard({ data }) {
    console.log(data.link)
    return <Card component="a" href={`${data.link}`} target='blank' radius="md" withBorder>
        <Text weight={500} size="lg" mb="md">{data.title}</Text>
        <Group position="apart">
            <Text size="sm" color="dimmed" lineClamp={10}>
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
  }
};
