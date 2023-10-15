import { Card } from "./components/card/Card"
import { Filter } from "./components/filter/Filter"
import { FormSearch } from "./components/form/FormSearch"
import { Navbar } from "./components/navbar/Navbar"

import { data } from './data'

export const App = () => {
    return (
        <>
            <Navbar />
            <FormSearch />
            <div className="grid grid-cols-12 gap-6 px-4 py-8">
                <Filter />
                <main className="col-span-9">
                    <div className="mb-9">
                        <div className="flex gap-2 items-center">
                            <h2 className="text-4xl font-bold">Recommended jobs</h2>
                            <span className="border border-zinc-800 font-bold rounded-2xl px-3 py-1">386</span>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-3 justify-center">
                        {
                            data.map((e) => (
                                <Card {...e} key={e.id} />
                            ))
                        }
                    </div>
                </main>
            </div>
        </>
    )
}
