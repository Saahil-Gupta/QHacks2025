// firebase-config.js
import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    "type": "service_account",
    "project_id": "qhacks2025-dc8e1",
    "private_key_id": "e29ebf727c2cee681c1c0ccc254dd845c73c4e6b",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDUPBmuvzt0y1HP\nUIlBVT66ME3RwjorsL4pBm3yfFInsBJWzXluVkgTBI4wm7PDxOcCinjAWDbmA0lg\naco6l/D6/gbybgNqCTr40fNWs1DOdXakS8qTL01DU+cbcD9b/0gFb/6ifB10vGEl\nVKHXu8aeTFCt5jWT1E+8+1iC6qbctx7hDwHX4DZR0jQtKd/y5P96GluESaLL5uOa\nKsMe+RqRjGWUh/14r1VSdxZbBCSr67oRNfkX1SMWiB9lzwf3N+sxZFz4Q8YmjdXa\nG4TmM0s3k9uOun4uETmTujPyTp4F2RnqYWjvjNonKXTUEgY3HriYkuT79n4sWO32\nQQNGJw4TAgMBAAECggEAFDJhTKHiKevXWIqUz+TULVUUyBYFrHa2AfgcqmtuSLHs\nF4VCPbUe8sBc5P9MN3XGI2sYsU/ebuZ31cxQybaqi211LR45sPOOlch/sbaAGsWk\nNApfuBX+R56fwEVe94WZovrUw+hacpYitdy8nL0VL6dE3jz+yEH3Z0fmqmljgQli\nbhDy1CII++FUSFpl4jdr3odSfuyohUuqP5LuRql2pf7SDKhwG/MtQn1CzG2wUqRI\nNQhrjK7Wx0/FB+/Au22VWLbVohoEre+nAZZXmQZql1+TIWT+voARjV667U9hocRC\nr1eNYw5NiRtLGrGxQtcTxc0QNvqTRdEQbaAJBjBBgQKBgQDvmWyeY02T+p5vxbUG\nlctmUciEZRiQnwbFChfq4D69w43MR3zJjgJYlr5whsItJs6LWRDryleyTq9IIOWF\nPQ/nUkZlmXI09elua3QFHhABYwrFouqeZcossNDSqKo74/IZR6KPX9IKohX9uHix\n7KpPosmnzBAZFtd9gxVqRx46YQKBgQDiwyiFyA4yOsHP/hm2uL8nPSZ6ujHVJzQK\nEftYI3urjl1/vG1GZkkcInunJ8h9blJKYtl5IWOTSCOkkuXQ+FgXUN257L+AY8Yb\nQHYjgWYMKHUPpGJTgKE+Taat4Xpk4GUVAvqHzA4V5kwhLpzAcWieLSp+ZXLEaGFp\nf4wybEAk8wKBgQCyuWlShJR7y7ife4TbUqWUv3CpgZffWSB9nlfU9k0W1GZTeQfW\neT26w0dvPLZfY9EyFNAQcrET6qnJTfCngLL6RF8KrnmIk976ZOD4aEJcJnsEjdAh\nM6Cp0YMTgIjrf885mDvkYv+Uuu9YgWBWqEkqei2eIxPnAyjfEQbKbh5YQQKBgH4J\nTtqcyRcuBU9fwlcG9GgQ2vRXzR7WPVxjhjoE7tX5uQooZuw8KeKTX/sWZ58f1Gk3\n6/whjMDt1bHBXC77+apr7fFLH11zF0dKWt99KoUTb40UJvqWggipDD2VF3w+JLC7\nCRi1WBbf++xthf6Iikdwfy/lnxZ/lbUXiYr1E+n1AoGBAO1oWakGxyOnyfAVye65\nCVxtubRTAc9V932U/iCrASQsCBHpO5Bac4jzuhccmqnxlKhsNdIkAMC7ozuf8Cek\ngDvXV+rCovx1hmA+9SQvUaQhAaLpEfWwIQjTPB+ytVCDLuAHODz14mRkfAuN1E6f\nN52v+zOAdFqE11VxuB2LLlsx\n-----END PRIVATE KEY-----\n",
    "client_email": "firebase-adminsdk-fbsvc@qhacks2025-dc8e1.iam.gserviceaccount.com",
    "client_id": "103707362679263023340",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-fbsvc%40qhacks2025-dc8e1.iam.gserviceaccount.com",
    "universe_domain": "googleapis.com"
  };
  

firebase.initializeApp(firebaseConfig);

export default firebase;
