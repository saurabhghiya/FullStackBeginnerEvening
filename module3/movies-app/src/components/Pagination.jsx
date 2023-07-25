

export default function Pagination({pageNo}){
    let lastPage = 25;

    return <div className="page-nav h-[30px] padding-[5px] flex justify-center mt-[30px] gap-[10px]">
        <span key={1} data-topage={1} className="firstpage select-none material-symbols-rounded bg-neutral-200 text-center h-fit cursor-pointer py-[10px] rounded min-w-[40px] px-[10px]">
            first_page
        </span>
        <span key={2} data-topage={ pageNo>1?pageNo-1:lastPage } className="prev select-none material-symbols-rounded bg-neutral-200 text-center h-fit cursor-pointer py-[10px] rounded min-w-[40px] px-[10px]">
            arrow_back_ios_new
        </span>
        <span key={3} data-topage={ pageNo>1?pageNo-1:lastPage } className="select-none text-2xl bg-neutral-200 text-center h-fit leading-none cursor-pointer py-[10px] rounded min-w-[40px] px-[10px]">
            {pageNo>1?pageNo-1:lastPage}
        </span>
        <span key={4} data-topage={pageNo} className="select-none text-2xl bg-neutral-800 text-neutral-200 text-center h-fit leading-none cursor-pointer py-[10px] rounded min-w-[40px] px-[10px]">
            {pageNo}
        </span>
        <span key={5} data-topage={pageNo<lastPage?pageNo+1:1} className="select-none text-2xl bg-neutral-200 text-center h-fit leading-none cursor-pointer py-[10px] rounded min-w-[40px] px-[10px]">
            {pageNo<lastPage?pageNo+1:1}
        </span>
        <span key={6} data-topage={pageNo<lastPage?pageNo+1:1} className="next select-none material-symbols-rounded bg-neutral-200 text-center h-fit cursor-pointer py-[10px] rounded min-w-[40px] px-[10px]">
            arrow_forward_ios
        </span>
        <span key={7} data-topage={lastPage} className="lastpage select-none material-symbols-rounded bg-neutral-200 text-center h-fit cursor-pointer py-[10px] rounded min-w-[40px] px-[10px]">
            last_page
        </span>
    </div>
}