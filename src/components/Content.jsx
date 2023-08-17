import { ContentCard } from "./ContentCard"
import { universityData, genderData } from "../data"
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, PieChart, Pie } from "recharts";
import { Link } from "react-router-dom";

const cardContent = [
    {
        departmentId: 'IT-WEB',
        title: 'Information Technology (WEB)',
        members: 24,
        backgroundColor: '#eea29a',
        imageURL: 'https://www.webskittersacademy.in/wp-content/uploads/2015/08/Web-Developer-skill.jpg'
    },
    {
        departmentId: 'IT-DM',
        title: 'Digital Marketing',
        members: 16,
        backgroundColor: ' #b1cbbb',
        imageURL: 'https://elements-cover-images-0.imgix.net/e1d975d3-d95b-4c35-b011-d79bfe892dc6?auto=compress%2Cformat&fit=max&w=900&s=3695e8365f38ebc7682bddad593e3969'
    },
    {
        departmentId: 'CE',
        title: 'Civil Engineering',
        members: 7,
        backgroundColor: '#b5e7a0',
        imageURL: 'https://img.freepik.com/premium-photo/innovative-architecture-civil-engineering-plan_31965-5441.jpg?w=2000'
    },
    {
        departmentId: 'HR',
        title: 'Human Recources',
        members: 23,
        backgroundColor: '#d6cbd3',
        imageURL: 'https://blog.vantagecircle.com/content/images/2020/07/critical-human-resources.png'
    },
    {
        departmentId: 'ACC',
        title: 'Accounting',
        members: 23,
        backgroundColor: ' #e3eaa7',
        imageURL: 'https://s3.amazonaws.com/utep-uploads/wp-content/uploads/unr/2020/04/14121448/UNR-MACC-2020-Q1-Skyscraper-Types-of-Accounting-Jobs-header-v2-2-1.jpg'
    },
    {
        departmentId: 'LP',
        title: 'Logistics and Procurement',
        members: 12,
        backgroundColor: '#b7d7e8',
        imageURL: 'https://builtin.com/sites/www.builtin.com/files/styles/og/public/2022-09/logistics.png'
    },
]


export const Content = () => {
    const cards = cardContent.map((content) => <div><Link style={{display: 'inline-block'}} key={content.title} to={`/dashboard/departments/${content.departmentId}`}><ContentCard imageURL={content.imageURL} backgroundColor={content.backgroundColor} title={content.title} members={content.members} bg={content.bg} icon={content.icon} /></Link></div> )

    return (
        <div className="flex flex-wrap justify-evenly w-4/5	p-3">

            {cards}
            <div className="flex py-3">
                <BarChart width={500} height={300} data={genderData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="male" fill="#034f84" />
                    <Bar dataKey="female" fill="#f7786b" />
                </BarChart>

                <PieChart width={650} height={250}>
                    <Pie data={universityData} dataKey="value" nameKey="name" cx="50%" cy="50%" />
                    <Tooltip />
                    <Legend />
                </PieChart>
            </div>

        </div>
    )
}