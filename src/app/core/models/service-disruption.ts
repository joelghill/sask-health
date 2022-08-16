/**
 *  Interface representing a health service disruption
 */
export interface ServiceDisruption {

    start_date?: Date
    end_date?: Date

    title: string
    link: string
    facility_name: string
    community_name: string
    region_name: string

    location: {
        latitude: number
        longitude: number
    }

    disruption: string
}
