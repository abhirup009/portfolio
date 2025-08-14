
import Section from '@/app/components/shared/Section';
import PublicationCard from '@/app/components/shared/PublicationCard';

interface Publication {
  title: string;
  description: string;
  researchGateUrl: string;
}

const publicationsData: Publication[] = [
  {
    title: "Time Series based Air Pollution Forecasting using SARIMA and Prophet Model",
    description: "Air pollution severely affects many countries around the world causing serious health effects or death. Increasing dependency on fossil fuels through the last century has been responsible for the degradation in our atmospheric condition. Pollution emitting from various vehicles also cause an immense amount of pollution. Pollutants like RSPM, SO2, NO2, SPM, etc. are the major contributors to air pollution which can lead to acute and chronic effects on human health. The research focus of this paper is to identify the usefulness of analytics models to build a system that is capable of giving a rough estimate of the future levels of pollution within a considerable confidence interval. Rendered linear regression techniques are found to be insufficient for the time-dependent data. In this regard, we have used time series forecasting approach for predicting the future levels of various pollutants within a considerable confidence interval. The experimental analysis of the forecasting for the air pollution levels of Bhubaneswar City indicates the effectiveness of our proposed method using SARIMA and Prophet model.",
    researchGateUrl: "https://www.researchgate.net/publication/336441701_Time_Series_based_Air_Pollution_Forecasting_using_SARIMA_and_Prophet_Model",
  },
  {
    title: "Long Term Forecasting of Ambient Air Quality Using Deep Learning Approach",
    description: "With the rapid development of urbanization, ambient air pollution has become one of the most serious issues in the worldwide. Particulate matter particles have been found as one of the critical risk factors of several lung diseases and respiratory problems. Numerous countries worldwide are paying their close attention to these risk factors as it became more challenging day by day. Therefore, air quality assessment and forecasting is a major step to mitigate the environmental hazard. This paper proposes a time series based CNN-LSTM-SVR forecasting model, which can deal with the temporal dependency of the massive air pollution dataset and forecast air quality level over the next two weeks. It works better, approximately 91-96% than the baseline models. This model proved a better long term forecasting model, which is very reliable in the ﬁeld of air quality modeling.",
    researchGateUrl: "https://www.researchgate.net/publication/349157159_Long_Term_Forecasting_of_Ambient_Air_Quality_Using_Deep_Learning_Approach",
  },
];

export default function PublicationsSection() {
  return (
    <Section id="publications" title="Technical Publications">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {publicationsData.map((pub, index) => (
          <PublicationCard
            key={index}
            title={pub.title}
            description={pub.description}
            researchGateUrl={pub.researchGateUrl}
          />
        ))}
      </div>
    </Section>
  );
}
