import {stackDealer, Tech} from "./techDealer";

const competencies = [
    {
        icon: stackDealer[Tech.TypeScript],
        label: "TypeScript (React and Node)",
    },
    {
        icon: stackDealer[Tech.Java],
        label: "Java (Spring)",
    },
    {
        icon: stackDealer[Tech.CSharp],
        label: "C# (.NET, ASP.NET, and Blazor)",
    },
    {
        icon: stackDealer[Tech.SqlServer],
        label: "SQL and NoSQL databases"
    }
];

export default competencies;