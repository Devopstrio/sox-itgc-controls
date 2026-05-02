import sys
import time
from core.controls.engine import ControlDefinitionEngine, ControlTestingEngine, SegregationOfDutiesEngine, RiskScoringModel

def run_sox_simulation():
    # 1. Initialize Engines
    engine = ControlDefinitionEngine()
    tester = ControlTestingEngine()
    sod = SegregationOfDutiesEngine()
    risk_model = RiskScoringModel()
    
    print("--- SOX ITGC Controls Platform Simulation ---")
    
    # 2. Simulate Control Framework Setup
    domains = [
        {"name": "Access Provisioning", "cat": "ACCESS", "desc": "User lifecycle management"},
        {"name": "Change Authorization", "cat": "CHANGE", "desc": "Production change approvals"},
        {"name": "Batch Job Monitoring", "cat": "OPS", "desc": "Failed job alerts"},
    ]
    
    controls = []
    print(f"\n[GOVERNANCE] Initializing ITGC Control Matrix for 2026 Audit...")
    for d in domains:
        c = engine.create_control(d['name'], d['cat'], d['desc'])
        controls.append(c)
        print(f"  Created Control: {c['id']} | Category: {c['category']}")
    
    # 3. Simulate Automated Testing
    print(f"\n[TESTING] Executing Continuous Control Testing...")
    for c in controls:
        # Mocking evidence: Access is valid, Ops is failing
        evidence = {"validation_token": "SOX-2026-TOKEN"} if c['category'] != "OPS" else {}
        result = tester.test_control(c['id'], evidence)
        status = "✅ PASS" if result['result'] == "EFFECTIVE" else "❌ FAIL"
        print(f"  {status} Control {c['id']} | Result: {result['result']} | Score: {result['score']}")
    
    # 4. Simulate Segregation of Duties (SoD) Check
    print(f"\n[ACCESS] Running Segregation of Duties (SoD) Conflict Scan...")
    user_permissions = ["DEVELOPER", "DEPLOYER", "DBA"]
    conflicts = sod.validate_roles(user_permissions)
    if conflicts:
        for conflict in conflicts:
            risk = risk_model.calculate_risk(5, 5) # High impact, High likelihood
            print(f"  🔥 ALERT: SoD Conflict! {conflict['role_a']} & {conflict['role_b']} | Risk Score: {risk}/25")

if __name__ == "__main__":
    run_sox_simulation()
