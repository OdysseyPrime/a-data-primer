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
                        display: 'How did we get here?',
                        id: 'how-we-got-here'
                    },
                    {
                        display: 'Everything into one',
                        id: 'everything-into-one'
                    }
                ]
            },
            {
                display: 'Jobs',
                id: PAGES.SCHEDULER.JOBS,
                children: [
                    {
                        display: 'Tags',
                        id: 'tags',
                    },
                    {
                        display: 'Triggers',
                        id: 'triggers',
                        children: [
                            {
                                display: 'Time Based Trigger',
                                id: 'time-based-trigger'
                            },
                            {
                                display: 'Pipeline Complete Trigger',
                                id: 'pipeline-complete-trigger'
                            },
                            {
                                display: 'Job Failed Trigger',
                                id: 'job-failed-trigger'
                            }
                        ]
                    },
                    {
                        display: 'Tasks',
                        id: 'tasks'
                    },
                ]
            },
            {
                display: 'Clusters',
                id: PAGES.SCHEDULER.CLUSTERS,
                children: [
                    {
                        display: 'Spot Options',
                        id: 'spot-options'
                    },
                    {
                        display: 'Bootstrap Configurations and Actions',
                        id: 'bootstrap-advanced-configs'
                    },
                    {
                        display: 'Nodes',
                        id: 'nodes',
                        children: [
                            {
                                display: 'Master Instance',
                                id: 'master-instances'
                            },
                            {
                                display: 'Core Instance',
                                id: 'core-instances'
                            },
                            {
                                display: 'Single Capacity',
                                id: 'single-capacity'
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
                        display: 'First',
                        id: 'first'
                    },
                    {
                        display: 'Second',
                        id: 'second'
                    },
                    {
                        display: 'To keep in mind',
                        id: 'keeping-in-mind'
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


