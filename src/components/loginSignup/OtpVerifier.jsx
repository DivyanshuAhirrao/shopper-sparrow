import React, { useRef, useState } from "react";

const OtpVerifier = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [verificationId, setVerificationId] = useState(null);
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [user, setUser] = useState(null);
  const recaptchaVerifierRef = useRef(null);

  // Initialize Firebase (replace with your config)
  const initializeFirebase = () => {
    if (!window.firebase || !window.firebase.apps.length) {
      const firebaseConfig = {
        apiKey: "AIzaSyBj_caIGPcFZ_8ikJLK3ytrhczFXjGVZQs",
        authDomain: "sparrow-shopper.firebaseapp.com",
        projectId: "sparrow-shopper",
        storageBucket: "sparrow-shopper.appspot.com",
        messagingSenderId: "120542939776",
        appId: "1:120542939776:web:2f09c0cc87a3cd118db465",
        measurementId: "G-1HM2QHGEW4",
      };

      if (window.firebase && !window.firebase.apps.length) {
        window.firebase.initializeApp(firebaseConfig);
      }
    }
    return window.firebase ? window.firebase.auth() : null;
  };

  const setupRecaptcha = () => {
    const auth = initializeFirebase();
    if (!auth) {
      throw new Error("Firebase not initialized");
    }

    // Clear existing recaptcha
    if (recaptchaVerifierRef.current) {
      try {
        recaptchaVerifierRef.current.clear();
      } catch (e) {
        console.log("Error clearing recaptcha:", e);
      }
      recaptchaVerifierRef.current = null;
    }

    // Clear the container
    const container = document.getElementById("recaptcha-container");
    if (container) {
      container.innerHTML = "";
    }

    // Create new RecaptchaVerifier
    recaptchaVerifierRef.current = new window.firebase.auth.RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: (response) => {
          console.log(response, "reCAPTCHA solved");
        },
        "expired-callback": () => {
          console.log("reCAPTCHA expired");
          setError("reCAPTCHA expired. Please try again.");
        },
      }
    );

    return recaptchaVerifierRef.current;
  };

  const sendOtpToPhoneNumber = async () => {
    setError("");
    setLoading(true);

    try {
      const auth = initializeFirebase();
      if (!auth) {
        throw new Error("Firebase not initialized properly");
      }

      // Validate phone number
      if (!phoneNumber || phoneNumber.length < 10) {
        throw new Error("Please enter a valid phone number");
      }

      // Format phone number
      const formattedPhoneNumber = phoneNumber.startsWith("+")
        ? phoneNumber
        : `+${phoneNumber}`;

      console.log("Sending OTP to:", formattedPhoneNumber);

      // Setup reCAPTCHA
      const appVerifier = setupRecaptcha();

      // Send OTP
      const confirmationResult = await window.firebase
        .auth()
        .signInWithPhoneNumber(formattedPhoneNumber, appVerifier);

      console.log(confirmationResult, " ||||| >>>>> OTP sent successfully");
      setVerificationId(confirmationResult.verificationId);
      setShowOtpInput(true);
      setLoading(false);
    } catch (error) {
      console.error("Error sending OTP:", error);
      setError(error.message || "Failed to send OTP. Please try again.");
      setLoading(false);

      // Clear recaptcha on error
      if (recaptchaVerifierRef.current) {
        try {
          recaptchaVerifierRef.current.clear();
        } catch (e) {
          console.log("Error clearing recaptcha after error:", e);
        }
        recaptchaVerifierRef.current = null;
      }
    }
  };

  const verifyOtp = async () => {
    setError("");
    setLoading(true);

    try {
      const auth = initializeFirebase();
      if (!auth || !verificationId) {
        throw new Error("Verification ID not found");
      }

      if (otp.length !== 6) {
        throw new Error("Please enter a valid 6-digit OTP");
      }

      const credential = window.firebase.auth.PhoneAuthProvider.credential(
        verificationId,
        otp
      );
      const result = await auth.signInWithCredential(credential);

      console.log("Phone number verified successfully");
      setUser(result.user);
      setLoading(false);
    } catch (error) {
      console.error("Error verifying OTP:", error);
      setError(error.message || "Invalid OTP. Please try again.");
      setLoading(false);
    }
  };

  const resetForm = () => {
    setPhoneNumber("");
    setOtp("");
    setVerificationId(null);
    setShowOtpInput(false);
    setError("");
    setUser(null);

    if (recaptchaVerifierRef.current) {
      try {
        recaptchaVerifierRef.current.clear();
      } catch (e) {
        console.log("Error clearing recaptcha on reset:", e);
      }
      recaptchaVerifierRef.current = null;
    }
  };

  const logout = () => {
    const auth = initializeFirebase();
    if (auth) {
      auth.signOut();
    }
    resetForm();
  };

  // Load Firebase scripts
  React.useEffect(() => {
    const loadFirebase = () => {
      if (!window.firebase) {
        const script1 = document.createElement("script");
        script1.src =
          "https://cdnjs.cloudflare.com/ajax/libs/firebase/9.23.0/firebase-app-compat.min.js";
        script1.onload = () => {
          const script2 = document.createElement("script");
          script2.src =
            "https://cdnjs.cloudflare.com/ajax/libs/firebase/9.23.0/firebase-auth-compat.min.js";
          document.head.appendChild(script2);
        };
        document.head.appendChild(script1);
      }
    };

    loadFirebase();
  }, []);

  if (user) {
    return (
      <div
        style={{
          height: "100vh",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
          padding: "20px",
        }}
      >
        <div
          style={{
            background: "#f0f8f0",
            padding: "30px",
            borderRadius: "12px",
            textAlign: "center",
            maxWidth: "400px",
            width: "100%",
          }}
        >
          <div
            style={{
              background: "#4CAF50",
              color: "white",
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 20px",
              fontSize: "24px",
            }}
          >
            ✓
          </div>
          <h2 style={{ color: "#2E7D32", marginBottom: "10px" }}>
            Verification Successful!
          </h2>
          <p style={{ color: "#666", marginBottom: "20px" }}>
            Your phone number has been verified
          </p>
          <div
            style={{
              background: "#fff",
              padding: "15px",
              borderRadius: "8px",
              marginBottom: "20px",
            }}
          >
            <p style={{ margin: "5px 0", fontSize: "14px", color: "#666" }}>
              Phone:
            </p>
            <p style={{ margin: "5px 0", fontWeight: "bold" }}>
              {user.phoneNumber}
            </p>
            <p style={{ margin: "5px 0", fontSize: "14px", color: "#666" }}>
              User ID:
            </p>
            <p
              style={{
                margin: "5px 0",
                fontSize: "12px",
                wordBreak: "break-all",
              }}
            >
              {user.uid}
            </p>
          </div>
          <button
            onClick={logout}
            style={{
              background: "#f44336",
              color: "white",
              border: "none",
              padding: "12px 24px",
              borderRadius: "8px",
              cursor: "pointer",
              width: "100%",
            }}
          >
            Logout
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "20px",
        padding: "20px",
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "30px",
          borderRadius: "12px",
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          maxWidth: "400px",
          width: "100%",
        }}
      >
        <h2
          style={{ textAlign: "center", marginBottom: "20px", color: "#333" }}
        >
          Phone Verification
        </h2>

        {error && (
          <div
            style={{
              background: "#ffebee",
              color: "#c62828",
              padding: "12px",
              borderRadius: "8px",
              marginBottom: "20px",
              border: "1px solid #ef5350",
            }}
          >
            {error}
          </div>
        )}

        {!showOtpInput ? (
          <div>
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                fontWeight: "bold",
                color: "#555",
              }}
            >
              Phone Number
            </label>
            <input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="+1234567890 or +911234567890"
              style={{
                width: "100%",
                padding: "12px",
                border: "2px solid #ddd",
                borderRadius: "8px",
                fontSize: "16px",
                marginBottom: "8px",
                boxSizing: "border-box",
              }}
            />
            <p
              style={{ fontSize: "12px", color: "#666", marginBottom: "20px" }}
            >
              Include country code (e.g., +91 for India, +1 for US)
            </p>

            <button
              onClick={sendOtpToPhoneNumber}
              disabled={loading || !phoneNumber}
              style={{
                width: "100%",
                background: loading || !phoneNumber ? "#ccc" : "#4CAF50",
                color: "white",
                border: "none",
                padding: "12px",
                borderRadius: "8px",
                fontSize: "16px",
                cursor: loading || !phoneNumber ? "not-allowed" : "pointer",
              }}
            >
              {loading ? "Sending OTP..." : "Send OTP"}
            </button>
          </div>
        ) : (
          <div>
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                fontWeight: "bold",
                color: "#555",
              }}
            >
              Enter OTP
            </label>
            <input
              type="text"
              value={otp}
              onChange={(e) =>
                setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))
              }
              placeholder="123456"
              maxLength="6"
              style={{
                width: "100%",
                padding: "12px",
                border: "2px solid #ddd",
                borderRadius: "8px",
                fontSize: "24px",
                textAlign: "center",
                letterSpacing: "8px",
                marginBottom: "8px",
                boxSizing: "border-box",
              }}
            />
            <p
              style={{ fontSize: "12px", color: "#666", marginBottom: "20px" }}
            >
              Enter the 6-digit code sent to {phoneNumber}
            </p>

            <button
              onClick={verifyOtp}
              disabled={loading || otp.length !== 6}
              style={{
                width: "100%",
                background: loading || otp.length !== 6 ? "#ccc" : "#2196F3",
                color: "white",
                border: "none",
                padding: "12px",
                borderRadius: "8px",
                fontSize: "16px",
                cursor: loading || otp.length !== 6 ? "not-allowed" : "pointer",
                marginBottom: "10px",
              }}
            >
              {loading ? "Verifying..." : "Verify OTP"}
            </button>

            <button
              onClick={resetForm}
              style={{
                width: "100%",
                background: "#757575",
                color: "white",
                border: "none",
                padding: "12px",
                borderRadius: "8px",
                fontSize: "16px",
                cursor: "pointer",
              }}
            >
              Change Phone Number
            </button>
          </div>
        )}
      </div>

      {/* Hidden reCAPTCHA container */}
      <div id="recaptcha-container"></div>
    </div>
  );
};

export default OtpVerifier;
