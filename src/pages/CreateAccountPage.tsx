import { useNavigate } from "react-router-dom";
import { Button, Input, RadioGroup } from "../ui/components";

export default function CreateAccountPage() {
  const navigate = useNavigate();

  return (
    <>
      {/* Form */}
      <div className="flex flex-col gap-6 w-full grow mt-6">
        <Input 
          placeholder="First name*" 
          type="text" 
          name="firstName" 
        />
        <Input 
          placeholder="Last name*" 
          type="text" 
          name="lastName" 
        />
        <Input 
          placeholder="Email*" 
          type="email" 
          name="email" 
        />
        <Input 
          placeholder="Password*" 
          type="password" 
          name="password" 
          helperText="Create a password with these requirements: ABC abc 123 !@% 8 characters"
        />
        
        <Input 
          placeholder="Mobile Number*" 
          type="tel" 
          name="phone"
          helperText="Enter a valid mobile number that can accept SMS messages. This will be used for two-step verification for account access, and for order-related notifications."
        />

        <Input 
          placeholder="Birthday MM/DD/YYYY*" 
          type="text" 
          name="dob"
          helperText="Double check your birthday is entered correctly, you won't be able to change it later."
        />

        <div className="flex flex-col gap-6 mt-4 mb-8">
          <RadioGroup 
            label="Enroll into Sankranti Rewards?*"
            name="enrollRewards"
            options={[{ label: "Yes", value: "yes" }, { label: "No", value: "no" }]}
            value="yes"
          />
          <RadioGroup 
            label="Receive text offers and promotions?*"
            name="receiveOffers"
            options={[{ label: "Yes", value: "yes" }, { label: "No", value: "no" }]}
            value="yes"
          />
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="w-full pt-8 pb-4 mt-auto">
        <Button variant="primary" onClick={() => navigate("/")}>
          CREATE ACCOUNT
        </Button>
      </div>
    </>
  );
}
