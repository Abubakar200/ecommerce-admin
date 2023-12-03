import prismadb from "@/lib/prismadb";
import SizeForm from "./_components/color-form";

const ColorPage =async ({
    params
}: {
    params: {colorId: string}
}) => {
    const color = await prismadb.color.findUnique({
        where: {
            id: params.colorId
        }
    })
    return ( 
        <div className="flex-col">
            <div className="flex-1 space-y-4 pt-6 p-8">
                <SizeForm initialData={color}/>
            </div>
            
        </div>
     );
}
 
export default ColorPage;