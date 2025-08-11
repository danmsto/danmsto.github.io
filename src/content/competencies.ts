import { Competency } from "../util/types.ts";
import { Tech } from "../util/enums.ts";
import { techDealer } from "../util/dealers.ts";

const competencies: Competency[] = [
    {
        icon: techDealer[Tech.TypeScript],
        label: "TypeScript (React and Node)",
    },
    {
        icon: techDealer[Tech.Java],
        label: "Java (Spring)",
    },
    {
        icon: techDealer[Tech.CSharp],
        label: "C# (.NET, ASP.NET, and Blazor)",
    },
    {
        icon: techDealer[Tech.SqlServer],
        label: "SQL and NoSQL databases"
    }
];

export default competencies;