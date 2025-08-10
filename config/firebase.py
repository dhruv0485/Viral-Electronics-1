import firebase_admin
from firebase_admin import credentials, firestore
import os
from dotenv import load_dotenv

load_dotenv()

def initialize_firebase():
    if not firebase_admin._apps:
        try:
            service_account_path = os.path.join(os.path.dirname(__file__),'..','serviceAccountKey.json')
            if os.path.exists(service_account_path):
                cred = credentials.Certificate(service_account_path)
                print("Using service account key")
            else:
                firebase_config = {
                    "type" : "service_account",
                    "project_id" : os.getenv("FIREBASE_PROJECT_ID"),
                    "private_key_id" : os.getenv("FIREBASE_PRIVATE_KEY_ID"),
                    "private_key" : os.getenv("FIREBASE_PRIVATE_KEY").replace('\\n', '\n'),
                    "client_email" : os.getenv("FIREBASE_CLIENT_EMAIL"),
                    "client_id" : os.getenv("FIREBASE_CLIENT_ID"),
                    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
                    "token_uri": "https://oauth2.googleapis.com/token",
                    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
                    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-fbsvc%40viral-938fe.iam.gserviceaccount.com",
                    "universe_domain": "googleapis.com"
                }

                cred = credentials.Certificate(firebase_config)
                print("Using environment variable")

            firebase_admin.initialize_app(cred)
            print("Firebase inititalized successfully")

        except Exception as e:
            print(f"Error initializing Firebase: {e}")
            raise e
        
    return firestore.client()

def get_firestore_client():
    try:
        return initialize_firebase()
    except Exception as e:
        print(f"Failed to get Firestore client: {e}")
        raise e