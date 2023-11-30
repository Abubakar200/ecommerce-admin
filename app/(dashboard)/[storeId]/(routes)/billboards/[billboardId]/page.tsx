import prismadb from "@/lib/prismadb";

const BillboardPage =async ({
    params
}: {
    params: {billboardId: string}
}) => {
    const billboard = await prismadb.billBoard.findUnique({
        where: {
            id: params.billboardId
        }
    })
    return ( 
        <div>
            this is the form for the billboards: {billboard?.label}
        </div>
     );
}
 
export default BillboardPage;