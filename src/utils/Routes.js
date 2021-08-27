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
    },
    {
        display: '2. Visual Data Hub',
        id: PAGES.VISUAL_DATA_HUB.ID,
        children: [
            {
                display: 'Plain Values Dictionary',
                id: PAGES.VISUAL_DATA_HUB.PLAIN_VALUES_DICTIONARY,
                children: [
                    {
                        display: 'What is Plain Values Dictionary?',
                        id: 'what-is-pvd-error'
                    },
                    {
                        display: 'Overcoming the issue',
                        id: 'overcoming-the-issue'
                    }
                ]
            },
            {
                display: 'Glob Patterns',
                id: PAGES.VISUAL_DATA_HUB.GLOB_PATTERNS,
                children: [
                    {
                        display: '1st Example',
                        id: 'example-1'
                    },
                    {
                        display: '2nd Example',
                        id: 'example-2'
                    },
                    {
                        display: '3rd Example',
                        id: 'example-3'
                    },
                    {
                        display: '4th Example',
                        id: 'example-4'
                    },
                    {
                        display: '5th Example',
                        id: 'example-5'
                    },
                    {
                        display: '6th Example',
                        id: 'example-6'
                    }
                ]
            },
            {
                display: 'Module JSON configuration',
                id: PAGES.VISUAL_DATA_HUB.MODULE_JSON_CONFIG
            },
            {
                display: 'Querying S3 data on Athena',
                id: PAGES.VISUAL_DATA_HUB.QUERYING_S3_DATA_ON_ATHENA
            },
            {
                display: 'Ensuring Data Append',
                id: PAGES.VISUAL_DATA_HUB.ENSURING_DATA_APPENDING
            },
            {
                display: 'Processing JSON data',
                id: PAGES.VISUAL_DATA_HUB.PROCESSING_JSON_DATA,
                children: [
                    {
                        display: 'Use Case',
                        id: 'use-case'
                    },
                    {
                        display: 'Solution',
                        id: 'solution'
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


