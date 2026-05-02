import json
import uuid
from typing import List, Dict, Any, Optional
from datetime import datetime

class ControlDefinitionEngine:
    """Defines and manages the SOX ITGC control framework."""
    
    def __init__(self):
        self.controls = {}

    def create_control(self, name: str, category: str, description: str) -> Dict[str, Any]:
        control_id = f"ITGC-{category.upper()}-{uuid.uuid4().hex[:4].upper()}"
        control = {
            "id": control_id,
            "name": name,
            "category": category,
            "description": description,
            "status": "ACTIVE",
            "owner": "Compliance Team",
            "version": "1.0",
            "created_at": datetime.utcnow().isoformat()
        }
        self.controls[control_id] = control
        return control

class ControlTestingEngine:
    """Executes automated and manual tests for control effectiveness."""
    
    def test_control(self, control_id: str, evidence: Dict[str, Any]) -> Dict[str, Any]:
        # Simulation: Success if evidence contains 'validation_token'
        effective = "validation_token" in evidence
        return {
            "test_id": str(uuid.uuid4()),
            "control_id": control_id,
            "timestamp": datetime.utcnow().isoformat(),
            "result": "EFFECTIVE" if effective else "INEFFECTIVE",
            "score": 100 if effective else 0,
            "deficiency_noted": not effective
        }

class SegregationOfDutiesEngine:
    """Validates user permissions against SoD conflict matrices."""
    
    def __init__(self):
        self.conflicts = [
            {"role_a": "DEVELOPER", "role_b": "DEPLOYER", "risk": "HIGH"},
            {"role_a": "DBA", "role_b": "AUDITOR", "risk": "MEDIUM"}
        ]

    def validate_roles(self, user_roles: List[str]) -> List[Dict[str, Any]]:
        found_conflicts = []
        for conflict in self.conflicts:
            if conflict["role_a"] in user_roles and conflict["role_b"] in user_roles:
                found_conflicts.append(conflict)
        return found_conflicts

class RiskScoringModel:
    """Calculates risk scores for control deficiencies and operational gaps."""
    
    def calculate_risk(self, impact: int, likelihood: int) -> int:
        # Risk = Impact x Likelihood (Standard 5x5 matrix)
        return impact * likelihood

if __name__ == "__main__":
    engine = ControlDefinitionEngine()
    tester = ControlTestingEngine()
    sod = SegregationOfDutiesEngine()
    risk_model = RiskScoringModel()
    
    print("--- SOX ITGC Controls Platform Simulation ---")
    
    # 1. Define Control
    c1 = engine.create_control("Access Provisioning", "ACCESS", "Ensure all users are approved.")
    print(f"Defined Control: {c1['id']} - {c1['name']}")
    
    # 2. Test Control
    test_result = tester.test_control(c1['id'], {"validation_token": "SOX-2026-CONFIRMED"})
    print(f"Test Result: {test_result['result']} (Score: {test_result['score']})")
    
    # 3. SoD Check
    user_roles = ["DEVELOPER", "DEPLOYER"]
    conflicts = sod.validate_roles(user_roles)
    if conflicts:
        print(f"ALERT: SoD Conflict Detected! {conflicts}")
    
    # 4. Risk Scoring
    score = risk_model.calculate_risk(5, 4)
    print(f"Deficiency Risk Score (Impact 5, Likelihood 4): {score}/25")
