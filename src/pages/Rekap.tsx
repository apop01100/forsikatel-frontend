// import ComingSoon from "../components/ComingSoon"
import RekapitulasiComponent from "../components/RekapitulasiComponent"

export type rekapResponses = {
  detail_person:
    {
      last_5days: [
        boolean,
        boolean,
        boolean,  
        boolean,
        boolean
      ]
      last_juz: number
      name_husband: string
      regional: string
      total_juz: number
      total_khatam: number
      user_id: number
    }[]
  total_juz_region:[
    {
      region: string
      total_juz: number
    }
  ]
  total_khatam_region:[ 
    {
      region: string
      total_khatam: number
    }
  ]
}
const Rekap = () => {
  
    return (
      <>
      <RekapitulasiComponent />
      </>
      // <ComingSoon />
    )
  }
  
  export default Rekap