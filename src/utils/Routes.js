import {PAGES} from 'Constants'

const routes = [
    {
        display: 'Home',
        id: PAGES.HOME,
    },
    {
        display: 'Platform: Visual Data Hub',
        id: PAGES.VISUAL_DATA_HUB.ID,
        children: [
            {
                id: PAGES.VISUAL_DATA_HUB.YOUR_FIRST_PIPELINE,
                display: 'Your First Pipeline',
            },
            {
                id: PAGES.VISUAL_DATA_HUB.EXPLAINING_SCHEMA,
                display: 'Data Source Schema',
                children: [
                    {
                        display: 'Example 1',
                        id: 'example-1-explaining-schema'
                    },
                    {
                        display: 'Example 2',
                        id: 'example-2-explaining-schema'
                    }
                ]
            },
            {
                display: 'Glob Patterns',
                id: PAGES.VISUAL_DATA_HUB.GLOB_PATTERNS,
                children: [
                    {
                        display: '1st Example',
                        id: 'example-1-globs'
                    },
                    {
                        display: '2nd Example',
                        id: 'example-2-globs'
                    },
                    {
                        display: '3rd Example',
                        id: 'example-3-globs'
                    },
                    {
                        display: '4th Example',
                        id: 'example-4-globs'
                    },
                    {
                        display: '5th Example',
                        id: 'example-5-globs'
                    },
                    {
                        display: '6th Example',
                        id: 'example-6-globs'
                    }
                ]
            },
            {
                display: 'Module JSON configuration',
                id: PAGES.VISUAL_DATA_HUB.MODULE_JSON_CONFIG
            },
            {
                display: 'Ensuring Data Append',
                id: PAGES.VISUAL_DATA_HUB.ENSURING_DATA_APPENDING
            },
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
                display: 'Querying S3 data on Athena',
                id: PAGES.VISUAL_DATA_HUB.QUERYING_S3_DATA_ON_ATHENA
            },
            {
                display: 'Processing JSON Data',
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
    },
    {
        display: 'Platform: Dashboards',
        id: PAGES.DASHBOARDS.ID,
        children: [
            {
                display: 'Your First Dashboard',
                id: PAGES.DASHBOARDS.YOUR_FIRST_DASHBOARD,
                children: [
                    {
                        display: 'Exporting to Data Lake',
                        id: 'exporting-to-data-lake'
                    },
                    {
                        display: 'Dashboard Creation',
                        id: 'dashboard-creation'
                    }
                ]
            },
            {
                display: 'Data Splits and Partitions',
                id: PAGES.DASHBOARDS.DATA_SPLITS_AND_PARTITIONS,
                children: [
                    {
                        display: 'Overhead Issues',
                        id: 'overhead-issues'
                    },
                    {
                        id: 'repartition',
                        display: 'Repartition'
                    },
                    {
                        id: 'partition-by',
                        display: 'Partition by'
                    }
                ]
            },
            {
                display: 'Pipeline vs On The Fly Calculations',
                id: PAGES.DASHBOARDS.PIPELINE_VS_ON_THE_FLY,
                children: [
                    {
                        display: 'Your Own Field',
                        id: 'your-own-field'
                    },
                    {
                        display: 'Pipeline Module',
                        id: 'pipeline-module'
                    },
                    {
                        display: 'Conclusion',
                        id: 'conclusion'
                    }
                ]
            }
        ]
    },
    {
        display: 'Platform: Scheduler',
        id: PAGES.SCHEDULER.ID,
        children: [
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
        display: 'Data Lifecycle',
        id: PAGES.DATA_LIFECYCLE.ID,
        children: [
            {
                display: 'Data Onboarding',
                id: 'data-onboarding'
            },
            {
                display: 'Data Processing',
                id: 'data-processing',
                children: [
                    {
                        display: 'Data Quality Assurance',
                        id: 'data-quality-assurance'
                    }
                ]
            },
            {
                display: 'Data Delivery',
                id: 'data-delivery',
                children: [
                    {
                        display: 'Platform Modules',
                        id: 'platform-modules'
                    },
                    {
                        display: 'Machine Learning Solutions',
                        id: 'ml-solutions',
                    },
                    {
                        display: 'Deliverables',
                        id: 'deliverables'
                    }
                ]
            },
            {
                display: 'Overview',
                id: 'overview',
                children: [
                    {
                        display: 'Platform and S3 Linkage',
                        id: 'platform-and-s3-linkage'
                    },
                    {
                        display: 'Standardized Output Graph',
                        id: 'standardized-output-graph',
                    }
                ]
            }
        ]
    },
    {
        display: 'Development',
        id: PAGES.DEVELOPMENT.ID,
        children: [
            {
                display: 'Code Base Setup',
                id: PAGES.DEVELOPMENT.CODE_BASE_SETUP,
                children: [
                    {
                        display: 'Creating a Token',
                        id: 'creating-a-token'
                    },
                    {
                        display: 'Installing Source Tree',
                        id: 'installing-source-tree'
                    },
                    {
                        display: 'Hadoop Setup',
                        id: 'hadoop-setup'
                    },
                    {
                        display: 'Importing to IntelliJ',
                        id: 'importing-to-intellij'
                    }
                ]
            },
            {
                display: 'ETL: Making a Module',
                id: PAGES.DEVELOPMENT.EXTRACT_TRANSFORM_LOAD,
                children: [
                    {
                        display: 'Registration',
                        id: 'registration'
                    },
                    {
                        display: 'Implementation',
                        id: 'implementation'
                    },
                    {
                        display: 'Things to Consider',
                        id: 'things-to-consider'
                    }
                ]
            }
        ]
    },
    {
        display: 'Calculators',
        id: PAGES.CALCULATORS.ID,
        children: [
            {
                display: 'Spark Configurations',
                id: PAGES.CALCULATORS.SPARK_CONFIGURATIONS,
            }
        ]
    },
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

export default routes.map(format)


