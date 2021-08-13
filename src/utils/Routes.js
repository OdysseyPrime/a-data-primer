import {PAGES} from 'Constants'

const routes = [
    {
        display: 'Home',
        id: PAGES.HOME,
    },
    {
        display: '1. Scheduler',
        id: PAGES.SCHEDULER.ID,
        children: [
            {
                display: 'Getting Started',
                id: PAGES.SCHEDULER.GETTING_STARTED,
                children: [
                    {
                        display: 'How did we get here?'
                    },
                    {
                        display: 'Everything into one'
                    }
                ]
            },
            {
                display: 'Jobs',
                id: PAGES.SCHEDULER.JOBS,
                children: [
                    {
                        display: 'Tags',
                    },
                    {
                        display: 'Triggers',
                        children: [
                            {
                                display: 'Time Based Trigger'
                            },
                            {
                                display: 'Pipeline Complete Trigger'
                            },
                            {
                                display: 'Job Failed Trigger'
                            }
                        ]
                    },
                    {
                        display: 'Tasks'
                    },
                ]
            },
            {
                display: 'Clusters',
                id: PAGES.SCHEDULER.CLUSTERS,
                children: [
                    {
                        display: 'Spot Options'
                    },
                    {
                        display: 'Bootstrap Configurations and Actions'
                    },
                    {
                        display: 'Nodes',
                        children: [
                            {
                                display: 'Master Instance'
                            },
                            {
                                display: 'Core Instance'
                            },
                            {
                                display: 'Single Capacity'
                            }
                        ]
                    },
                ]
            },
            {
                display: 'Use Cases',
                id: PAGES.SCHEDULER.USE_CASES,
                children: [
                    {
                        display: 'First'
                    },
                    {
                        display: 'Second'
                    },
                    {
                        display: 'To keep in mind'
                    }
                ]
            }
        ]
    }
]

const format = (which) => {
    let children = which.children || []
    return {
        ...which,
        id: !which.id ? which.display.replace(/ /g, '').replace(/[^a-zA-Z]/g, '').toLowerCase() : which.id,
        children: children.map(format)
    }
}

export const findById = (id) => {
    return routes.reduce((flatten, next) => {
        let children = next.children || []
        return [...flatten, next, ...children]
    }, []).find(which => which.id === id)
}

/**
 * Created by LeutrimNeziri on 30/03/2019.
 */
export default routes.map(format)


