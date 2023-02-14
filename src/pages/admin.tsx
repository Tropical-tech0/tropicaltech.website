import React, { useEffect, useState } from 'react'
import Head from 'next/head'

//components
import NavbarAdmin from '@/components/adminComponents/navbarAdmin'
import HomePage from '@/components/adminComponents/homePage'
import CreatePost from '@/components/adminComponents/createPost'
import ProtectedLayout from '@/components/adminComponents/protectedLayout'
import EditPost from '@/components/adminComponents/editPost'

//components admin provider - context
import { ComponentsAdmin, IComponentsAdmin } from '@/contexts/componentsAdmin'

const componentsAdmin = [
    { label: "home", component: <HomePage /> },
    { label: "create", component: <CreatePost /> },
    { label: "edit", component: <EditPost/> }
]

//admin page - manager posts of blog
const Admin: React.FC = () => {

    const [selectedComponent, setSelectedComponent] = useState<string>("home")
    const [componentChoosed, setComponentChoosed] = useState<JSX.Element>(<HomePage />)

    //choose component to render
    useEffect(() => {
        const managerComponents = () => {

            let findComponent: any = componentsAdmin.find(component => component.label === selectedComponent)

            setComponentChoosed(findComponent?.component)

        }
        managerComponents()
    }, [selectedComponent])

    return (
        <ProtectedLayout>
            <>
            <Head>
                <title>Tropical Tech | Admin</title>
            </Head>
            <ComponentsAdmin.Provider value={{ selectedComponent, setSelectedComponent } as IComponentsAdmin}>
                <NavbarAdmin />
                <main>
                    {componentChoosed}
                </main>
            </ComponentsAdmin.Provider>
            </>
        </ProtectedLayout>
        
    )
}

export default Admin