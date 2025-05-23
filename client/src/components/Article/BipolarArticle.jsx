import React, { useState } from 'react';

const BipolarArticle = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    'https://www.cdc.gov/childrensmentalhealth/images/Depression-Anxiety-Behavior-Disorders-chart.jpg?_=03418',
    'https://assets.weforum.org/editor/ZM8M512ZI2ZMZagSB3MwmmX1URuwvccSy5ISTECukwo.PNG',
  ];

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-center mb-8 text-blue-800">Bipolar Affective Disorder</h2>

      {/* Image Carousel */}
      <div className="mb-10 bg-gray-50 p-4 rounded-lg">
        <div className="relative">
          <div className="overflow-hidden rounded-lg shadow-md">
            <img
              src={images[currentImage]}
              alt="Bipolar"
              className="w-full h-auto object-contain"
            />
          </div>

          <button
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
            onClick={previousImage}
            aria-label="Previous image"
          >
            ←
          </button>

          <button
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
            onClick={nextImage}
            aria-label="Next image"
          >
            →
          </button>
        </div>

        <div className="flex justify-center mt-4">
          {images.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-8 mx-1 rounded-full ${
                currentImage === index ? 'bg-blue-600' : 'bg-gray-300'
              }`}
              onClick={() => setCurrentImage(index)}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Content Section */}
      <div className="space-y-6 text-gray-700 leading-relaxed">
        <p>
          Bipolar affective disorder, commonly known as bipolar disorder, is a mental health condition characterized by extreme mood swings that include episodes of mania (or hypomania) and depression. These mood swings can be severe and disruptive to a person's life. Bipolar disorder is a chronic condition, and while it cannot be cured, it can be effectively managed with treatment.
        </p>

        <p>There are two main types of bipolar disorder:</p>

        <ol className="list-decimal list-inside ml-4 space-y-2">
          <li>
            <strong>Bipolar I Disorder:</strong> In this type, individuals experience manic episodes that last for at least seven days or are severe enough to require hospitalization. Depressive episodes often accompany manic episodes or alternate with them.
          </li>
          <li>
            <strong>Bipolar II Disorder:</strong> This type is characterized by recurrent depressive episodes and at least one hypomanic episode. Hypomania is a milder form of mania, and it doesn't usually lead to severe impairment or hospitalization.
          </li>
        </ol>

        <p>Common symptoms of bipolar disorder include:</p>

        <ul className="list-disc list-inside ml-4 space-y-2">
          <li>Mania (or hypomania) symptoms: Euphoria, extreme irritability, increased energy, racing thoughts, decreased need for sleep, increased self-esteem, reckless behavior, and poor judgment.</li>
          <li>Depressive symptoms: Persistent sadness, loss of interest in previously enjoyed activities, changes in appetite and weight, difficulty concentrating, fatigue, feelings of guilt or worthlessness, and thoughts of suicide.</li>
        </ul>

        <p>The exact cause of bipolar disorder is not fully understood, but it is believed to result from a combination of genetic, biological, and environmental factors. It often emerges in late adolescence or early adulthood.</p>

        <p>
          Treatment for bipolar disorder typically involves a combination of psychotherapy (talk therapy), medication, and lifestyle management. Medications, such as mood stabilizers (e.g., lithium), antipsychotics, and antidepressants, are often prescribed to help stabilize mood and manage symptoms. Psychotherapy, such as cognitive-behavioral therapy (CBT) or interpersonal therapy, can help individuals learn coping strategies and manage their condition effectively. Lifestyle factors, like maintaining a regular sleep schedule and reducing stress, can also play a crucial role in symptom management.
        </p>

        <p>
          It's important for individuals with bipolar disorder to work closely with mental health professionals to develop a personalized treatment plan and to monitor their condition regularly. With proper treatment and support, many people with bipolar disorder can lead fulfilling lives and effectively manage their symptoms.
        </p>
      </div>
    </div>
  );
};

export default BipolarArticle;
