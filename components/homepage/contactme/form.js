"use client";
import { useState } from "react";
import styles from "../home.module.scss";

export default function Form() {
  const [message, setMessage] = useState({ name: "", email: "", message: "" });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setSuccess(false);
    setError(false);
    try {
      const response = await fetch("/api/messages", {
        method: "POST",
        body: JSON.stringify(message),
      });
      response.ok ? setSuccess(true) : setError(true);
    } catch (error) {
      console.log(error);
      throw error;
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className={styles.ContactForm}>
      <form onSubmit={handleSubmit}>
        <h2>تماس با من</h2>
        <p>
          از فرم زیر میتونید جهت درخواست پروژه ، پیشنهاد یا انتقاد ارتباط برقرار
          کنید
        </p>
        {success && (
          <div className={styles.Success}>پیغام شما با موفقیت ارسال شد</div>
        )}
        {error && (
          <div className={styles.Error}>
            خطا در ارسال پیغام . لطفا از راه های ارتباطی دیگر استفاده کنید
          </div>
        )}
        <div>
          <label>نام و نام خانوادگی : </label>
          <input
            type="text"
            onChange={(e) => setMessage({ ...message, name: e.target.value })}
          />
        </div>
        <div>
          <label>ایمیل :</label>
          <input
            onChange={(e) => setMessage({ ...message, email: e.target.value })}
            type="text"
          />
        </div>
        <div>
          <label>پیغام شما :</label>
          <textarea
            onChange={(e) =>
              setMessage({ ...message, message: e.target.value })
            }
            type="text"
          />
        </div>
        <button disabled={loading} type="submit">
          {loading ? "درحال ارسال..." : "ارسال "}
          {/* {success && 'با موفقیت ارسال شد'} */}
        </button>
      </form>
    </div>
  );
}
